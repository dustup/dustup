require 'coffee-script'
require 'yaml'
require 'haml'
require 'rake/clean'

@src = File.join('.', 'src')
@templates = File.join(@src, 'templates')
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

  character_haml_path = File.join(@templates, 'game', 'character.html.haml')
  @character_engine = Haml::Engine.new(File.read(character_haml_path))
  move_haml_path = File.join(@templates, 'game', 'character', 'move.html.haml')
  @move_engine = Haml::Engine.new(File.read(move_haml_path))
  game_index_haml_path = File.join(@templates, 'game', 'index.html.haml')
  @game_index_engine = Haml::Engine.new(File.read(game_index_haml_path))

  Dir.glob(File.join(@src, 'data', '*')) do |game_data_path|
    game_name = File.basename(game_data_path)
    game_path = File.join(@dest, game_name)
    characters = []

    # ensure directories for the games exist
    Dir.mkdir(game_path) unless Dir.exist?(game_path)

    # generate character pages
    Dir.glob(File.join(game_data_path, '*')) do |character|
      character_name = File.basename(character, '.yml')
      characters << character_name

      # generate the character page
      @data = YAML.load_file(character)
      begin
        page = @character_engine.render(
          Object.new,
          engine: @move_engine,
          data: @data
        )
      rescue
        puts "There was something wrong with the character data for #{character_name} from #{game_name}"
      end

      # write the page out
      compiled_character_page_path = File.join(game_path, "#{character_name}.html")
      File.write(compiled_character_page_path, page)
    end

    # generate the game index page
    page = @game_index_engine.render(
      Object.new,
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

private

def render_move(engine, type, move)
  engine.render(
    Object.new,
    engine: engine,
    type: type,
    move: move
  )
end
