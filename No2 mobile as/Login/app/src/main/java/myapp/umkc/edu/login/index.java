package myapp.umkc.edu.login;

/**
 * Created by Liszt.Si on 2017/11/3.
 */
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class index extends AppCompatActivity{
    private TextView info3;
    private Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.index);
        info3 = (TextView)findViewById(R.id.textView14);

        button=(Button)findViewById(R.id.button4);
        button.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                Intent intent2 = new Intent(index.this, MainActivity.class);
                startActivity(intent2);
            }
        });

        button=(Button)findViewById(R.id.button4);
        button.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                Intent intent3 = new Intent(index.this, Java.class);
                startActivity(intent3);
            }
        });
    }
}
