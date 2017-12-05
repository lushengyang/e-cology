
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (MsgUtil == null) var MsgUtil = {};
MsgUtil._path = '/dwr';
MsgUtil.null2String = function(p0, callback) {
  dwr.engine._execute(MsgUtil._path, 'MsgUtil', 'null2String', p0, callback);
}
MsgUtil.TokenizerString = function(p0, p1, p2, callback) {
  dwr.engine._execute(MsgUtil._path, 'MsgUtil', 'TokenizerString', p0, p1, p2, callback);
}
MsgUtil.TokenizerString2 = function(p0, p1, p2, callback) {
  dwr.engine._execute(MsgUtil._path, 'MsgUtil', 'TokenizerString2', p0, p1, p2, callback);
}
MsgUtil.getPopupMsg = function(p0, p1, p2, callback) {
  dwr.engine._execute(MsgUtil._path, 'MsgUtil', 'getPopupMsg', p0, p1, p2, callback);
}
