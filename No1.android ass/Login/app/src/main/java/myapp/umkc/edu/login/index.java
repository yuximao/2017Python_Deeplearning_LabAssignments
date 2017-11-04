package myapp.umkc.edu.login;

/**
 * Created by Liszt.Si on 2017/11/3.
 */
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class index extends AppCompatActivity{
    private TextView info3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.index);
        info3 = (TextView)findViewById(R.id.textView14);
    }
}
