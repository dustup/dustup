require 'yaml'
require 'haml'

@src = File.join(File.dirname(__FILE__), 'src')
@dest = File.join(File.dirname(@src), 'www')

task default: %w[compile]

task compile: [:clean] do
  character_haml_path = File.join(@src, 'character.html.haml')
  engine = Haml::Engine.new(File.read(character_haml_path))

  Dir.glob(File.join(@src, 'data', '*')) do |game_data_path|
    game_name = File.basename(game_data_path)
    game_path = File.join(@dest, game_name)

    # ensure directories for the games exist
    Dir.mkdir(game_path) unless Dir.exist?(game_path)

    Dir.glob(File.join(game_data_path, '*')) do |character|
      character_name = File.basename(character, '.yml')

      # generate the page
      @data = YAML.load_file(character)
      page = engine.render(Object.new, data: @data)

      # write the page out
      compiled_character_page_path = File.join(game_path, "#{character_name}.html")
      File.write(compiled_character_page_path, page)
    end
  end
end

task :clean do
  Dir.glob(File.join(@dest, '*')) do |d|
    FileUtils.rm_rf(d)
  end
end
