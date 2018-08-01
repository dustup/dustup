#!/usr/bin/env bash

# show people what we're doing
set -x

# watchman wants these set for linux
sudo sysctl -w fs.inotify.max_user_instances=1024 || true
sudo sysctl -w fs.inotify.max_user_watches=12288 || true

# watchman wants these set for osx
sudo sysctl -w kern.maxfiles=5242880 || true
sudo sysctl -w kern.maxfilesperproc=524288 || true
