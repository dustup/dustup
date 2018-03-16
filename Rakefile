require 'yaml'
require 'haml'
require 'rake/clean'

@src = File.join(File.dirname(__FILE__), 'src')
@dest = File.join(File.dirname(@src), 'www')

task default: %w[compile]

desc "compile source files into the app"
task compile: [:clobber] do
  Dir.glob(File.join(@src, 'data', '*')) do |game_data_path|
    game_name = File.basename(game_data_path)
    game_path = File.join(@dest, game_name)
    @characters = []

    # ensure directories for the games exist
    Dir.mkdir(game_path) unless Dir.exist?(game_path)

    # generate character pages
    haml_path = File.join(@src, 'game', 'character.html.haml')
    engine = Haml::Engine.new(File.read(haml_path))

    Dir.glob(File.join(game_data_path, '*')) do |character|
      character_name = File.basename(character, '.yml')
      @characters << character_name

      # generate the page
      @data = YAML.load_file(character)
      page = engine.render(Object.new, data: @data)

      # write the page out
      compiled_character_page_path = File.join(game_path, "#{character_name}.html")
      File.write(compiled_character_page_path, page)
    end

    # generate game index page
    haml_path = File.join(@src, 'game', 'index.html.haml')
    engine = Haml::Engine.new(File.read(haml_path))
    # generate the page
    page = engine.render(Object.new, game_path: game_path, characters: @characters)
    # write the page out
    game_index_page_path = File.join(game_path, 'index.html')
    File.write(game_index_page_path, page)
  end
end

CLOBBER.include(Dir.glob(File.join(@dest, '*')))
