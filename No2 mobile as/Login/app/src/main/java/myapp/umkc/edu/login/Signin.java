package myapp.umkc.edu.login;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import static android.R.attr.id;

public class Signin extends AppCompatActivity {
    private TextView info;
    private Button button;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
      info =(TextView)findViewById(R.id.info);

        button=(Button)findViewById(R.id.toindex);
        button.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                Intent intent2 = new Intent(Signin.this, index.class);
                startActivity(intent2);
            }
        });

    }
}
