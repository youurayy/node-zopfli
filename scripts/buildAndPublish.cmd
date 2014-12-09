#set NODE_PATH=%BASE%\lib
@rem put local copy of node-pre-gyp on PATH
set PATH=%BASE%\bin;%PATH%
call node-pre-gyp clean
call node-pre-gyp unpublish build package testpackage publish info
call node-pre-gyp clean install
call npm test
