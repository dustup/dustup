require 'yaml'
require 'haml'

task default: %w[compile]

task :compile do
  engine = engine = Haml::Engine.new(File.read('src/character.html.haml'))

Dir.glob('src/data/*') do |game_data_path|
  game = File.basename(game_data_path)
  game_path = "./www/#{game}"

  # ensure directories for the games exist
  Dir.mkdir(game_path) unless Dir.exist?(game_path)

  Dir.glob("src/data/#{game}/*") do |character|
    @data = YAML.load(File.read(character))
    # generate the page
    page = engine.render(Object.new, data: @data)

    # write the page out
    File.write("#{game_path}/#{File.basename(character, '.yml')}.html", page)
  end
end
end
