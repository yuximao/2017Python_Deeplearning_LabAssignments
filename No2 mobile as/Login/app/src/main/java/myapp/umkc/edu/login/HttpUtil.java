package myapp.umkc.edu.login;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by Liszt.Si on 2017/11/18.
 */
public class HttpUtil {
    public static String HttpGet(String strings) {
        HttpURLConnection connection = null;
        InputStream is = null;
        StringBuilder sbd = new StringBuilder();
        BufferedReader reader = null;
        try {
            URL url = new URL(strings);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            // add apikey to HTTP header
            connection.setRequestProperty("apikey","c69b55e1dec5de9ed663d3cdad8f08b2");
            connection.setConnectTimeout(5*1000);
            connection.setReadTimeout(5*1000);
            connection.connect();
            if(connection.getResponseCode()==200){
                is=connection.getInputStream();
                reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                String strRead = null;
                while ((strRead=reader.readLine())!=null){
                    sbd.append(strRead);
                    sbd.append("\r\n");
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if(is!=null){
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if(connection!=null){
                connection.disconnect();
            }
        }
        return sbd.toString();
    }

}
