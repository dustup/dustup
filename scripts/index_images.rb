#!/usr/bin/env ruby

require 'optparse'

def usage
  puts File.basename(__FILE__) + " GAME-NAME CHARACTER-NAME"
  exit 1
end

game = ARGV[0]
character = ARGV[1]

usage if game.nil? or character.nil?

Dir.chdir(File.dirname(__FILE__) + "/../data/games/#{game}/images/#{character}/")

image_hashes = Dir.glob('*.png').collect do |image|
"  {
    \"imageId\": \"#{File.basename(image, File.extname(image))}\",
    \"image\": require('./#{image}')
  }"
end

indices = 
"export default [
#{image_hashes.join(",\n")}
]
"

File.write('index.js', indices)
