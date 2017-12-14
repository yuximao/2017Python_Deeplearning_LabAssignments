package activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;

import com.example.administrator.yuying_android.R;
import com.google.gson.Gson;
import com.iflytek.cloud.RecognizerResult;
import com.iflytek.cloud.SpeechConstant;
import com.iflytek.cloud.SpeechError;
import com.iflytek.cloud.SpeechUtility;
import com.iflytek.cloud.ui.RecognizerDialog;
import com.iflytek.cloud.ui.RecognizerDialogListener;

public class MainActivity extends AppCompatActivity {

    TextView tv;
    private ListView obj;

    DBHelper mydb;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tv = (TextView) findViewById(R.id.tv);

        SpeechUtility.createUtility(this, SpeechConstant.APPID + "=5a3215e7");

        mydb = new DBHelper(this);
        ArrayList array_list = mydb.getAllCotacts();

        ArrayAdapter arrayAdapter =

                new ArrayAdapter(this,android.R.layout.simple_list_item_1, array_list);

        obj = (ListView)findViewById(R.id.listView1);
        obj.setAdapter(arrayAdapter);
        obj.setOnItemClickListener(new AdapterView.OnItemClickListener(){

            public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,long arg3) {

                int id_To_Search = arg2 + 1;

                Bundle dataBundle = new Bundle();

                dataBundle.putInt("id", id_To_Search);

                Intent intent = new

                        Intent(getApplicationContext(),com.example.addressbook.DisplayContact.class);

                intent.putExtras(dataBundle);

                startActivity(intent);

            }

        });

    }

    @Override

    public boolean onCreateOptionsMenu(Menu menu) {


        getMenuInflater().inflate(R.menu.mainmenu, menu);

        return true;

    }@Override

    public boolean onOptionsItemSelected(MenuItem item)
    {

        super.onOptionsItemSelected(item);

        switch(item.getItemId())

        {

            case R.id.Add:

                Bundle dataBundle = new Bundle();

                dataBundle.putInt("id", 0);

                Intent intent = new Intent(getApplicationContext(),com.example.addressbook.DisplayContact.class);

                intent.putExtras(dataBundle);

                startActivity(intent);

                return true;

            default:

                return super.onOptionsItemSelected(item);

        }

    }

    public boolean onKeyDown(int keycode, KeyEvent event) {

        if (keycode == KeyEvent.KEYCODE_BACK) {

            moveTaskToBack(true);

        }

        return super.onKeyDown(keycode, event);


    }

    public void open(View view) {
        initSpeech(this);
    }


    public void initSpeech(final Context context) {

        RecognizerDialog mDialog = new RecognizerDialog(context, null);

        mDialog.setParameter(SpeechConstant.LANGUAGE, "zh_cn");
        mDialog.setParameter(SpeechConstant.ACCENT, "mandarin");

        mDialog.setListener(new RecognizerDialogListener() {
            @Override
            public void onResult(RecognizerResult recognizerResult, boolean isLast) {
                if (!isLast) {

                    String result = parseVoice(recognizerResult.getResultString());
                    tv.setText(result);
                }
            }

            @Override
            public void onError(SpeechError speechError) {

            }
        });

        mDialog.show();
    }


    public String parseVoice(String resultString) {
        Gson gson = new Gson();
        Voice voiceBean = gson.fromJson(resultString, Voice.class);

        StringBuffer sb = new StringBuffer();
        ArrayList<Voice.WSBean> ws = voiceBean.ws;
        for (Voice.WSBean wsBean : ws) {
            String word = wsBean.cw.get(0).w;
            sb.append(word);
        }
        return sb.toString();
    }

    public class Voice {

        public ArrayList<WSBean> ws;

        public class WSBean {
            public ArrayList<CWBean> cw;
        }

        public class CWBean {
            public String w;
        }
    }
}

