#!/bin/bash

# this is a utility script to identify imageId values in movespec files
# which aren't present in the character's image index.js

function usage {
  echo $0 GAME-NAME CHARACTER-NAME
  exit 1
}

GAME=$1
CHARACTER=$2

if [ -z "${GAME}" -o -z "${CHARACTER}" ]; then
  usage
fi

cd $(dirname $0)
pushd ../data/games/${GAME}/ > /dev/null

REQUIRED_IMAGE_IDS=$(grep imageId movespecs/${CHARACTER}.json | awk -F\" '{print $4}')

for i in $REQUIRED_IMAGE_IDS; do
  ID_PRESENT=$(grep imageId images/${CHARACTER}/index.js | grep \"${i}\" | wc -l)
  if [ $ID_PRESENT == 0 ]; then
    echo ${i}
  fi
done

popd > /dev/null
