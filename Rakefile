require 'coffee-script'
require 'yaml'
require 'haml'
require 'rake/clean'

@src = File.join('.', 'src')
@dest = File.join('.', 'www')

task default: %w[compile]

desc "compile source files into the app"
task compile: [:clobber] do
  js_src = File.join(@src, 'js')
  js_dest = File.join(@dest, 'js')

  Dir.glob(File.join(js_src, '*')) do |js_path|
    # ensure the destination js directory exists
    Dir.mkdir(js_dest) unless Dir.exist?(js_dest)

    # compile the javascript if necessary
    if File.extname(js_path) == '.coffee'
      js = CoffeeScript.compile File.read(js_path)

      compiled_js_path = File.join(js_dest, File.basename(js_path, '.coffee'))
      File.write(compiled_js_path, js)
    else
      FileUtils.cp(js_path, js_dest)
    end
  end

  Dir.glob(File.join(@src, 'data', '*')) do |game_data_path|
    game_name = File.basename(game_data_path)
    game_path = File.join(@dest, game_name)
    characters = []

    # ensure directories for the games exist
    Dir.mkdir(game_path) unless Dir.exist?(game_path)

    # generate character pages
    haml_path = File.join(@src, 'game', 'character.html.haml')
    engine = Haml::Engine.new(File.read(haml_path))

    Dir.glob(File.join(game_data_path, '*')) do |character|
      character_name = File.basename(character, '.yml')
      characters << character_name

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
    page = engine.render(Object.new,
      game_display_name: game_name.split('_').map(&:capitalize).join(' '),
      game_path: game_path,
      characters: characters
    )
    # write the page out
    game_index_page_path = File.join(game_path, 'index.html')
    File.write(game_index_page_path, page)
  end
end

CLOBBER.include(Dir.glob(File.join(@dest, '*')))
