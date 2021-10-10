@echo off

call npm install
SETLOCAL
SET PATH=node_modules\.bin;node_modules\hubot\node_modules\.bin;%PATH%

node_modules\.bin\hubot.cmd --name "We're constantly looking for ways to make yo better! " %* 
