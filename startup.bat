@echo off
set API_SERVER=http://127.0.0.1:8081

:getArg
if "%1" == "--API_SERVER" (
	set API_SERVER=%2
)
if "%1" == "" goto main
shift
shift
goto getArg

:main
node server.js