#!/usr/bin/env bash

# show people what we're doing
set -x

# watchman wants these set
sudo sysctl -w fs.inotify.max_user_instances=1024
sudo sysctl -w fs.inotify.max_user_watches=12288
