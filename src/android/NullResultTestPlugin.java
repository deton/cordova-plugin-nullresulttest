package io.github.deton.nullresulttest;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class NullResultTestPlugin extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        PluginResult result = new PluginResult(PluginResult.Status.OK, (String)null);
        if ("nothread".equals(action)) {
            callbackContext.sendPluginResult(result);
            return true;
        }
        if ("thread".equals(action)) {
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    callbackContext.sendPluginResult(result);
                }
            });
            return true;
        }
        if ("forcethreadresult".equals(action)) {
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                        Thread.sleep(60);
                    } catch (InterruptedException e) {
                        android.util.Log.w("NullResultTestPlugin", "forcethreadresult", e);
                    }
                    callbackContext.sendPluginResult(result);
                }
            });
            return true;
        }
        return false;
    }
}
