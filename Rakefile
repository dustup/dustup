require 'yaml'
require 'haml'
require 'rake/clean'

@src = File.join(File.dirname(__FILE__), 'src')
@dest = File.join(File.dirname(@src), 'www')

task default: %w[compile]

desc "compile source files into the app"
task compile: [:clobber] do
  character_haml_path = File.join(@src, 'character.html.haml')
  engine = Haml::Engine.new(File.read(character_haml_path))

  Dir.glob(File.join(@src, 'data', '*')) do |game_data_path|
    game_name = File.basename(game_data_path)
    game_path = File.join(@dest, game_name)

    # ensure directories for the games exist
    Dir.mkdir(game_path) unless Dir.exist?(game_path)

    # generate character pages
    Dir.glob(File.join(game_data_path, '*')) do |character|
      character_name = File.basename(character, '.yml')

      # generate the page
      @data = YAML.load_file(character)
      begin
        page = engine.render(Object.new, data: @data)
      rescue
        puts "There was something wrong with the character data for #{character_name} from #{game_name}"
      end

      # write the page out
      compiled_character_page_path = File.join(game_path, "#{character_name}.html")
      File.write(compiled_character_page_path, page)
    end
  end
end

CLOBBER.include(Dir.glob(File.join(@dest, '*')))
