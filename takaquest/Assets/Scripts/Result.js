#pragma strict

var style : GUIStyle;
var style2 : GUIStyle;
var highScore : int;

function Start()
{
	style.fontSize = 40;
	style.normal.textColor = Color.red;

	style2.fontSize = 30;
	style2.normal.textColor = Color.white;


	if( PlayerPrefs.HasKey( "HighScore" ) )
	{
		highScore = PlayerPrefs.GetInt( "HighScore" );
	}
	else
	{
		highScore = 999;
	}
}


function OnGUI()
{
	if( GoalArea.goal )
	{
		var now : int = TimeText.time;

		if( highScore > now )
		{
			PlayerPrefs.SetInt( "HighScore", now );
			highScore = now;
		}

		GUI.Label( Rect( Screen.width / 2 -100, 100, 200, 50 ), "GAME RESULT", style2 );
/*
		GUI.Label( Rect( Screen.width / 2 -100, 150, 200, 50 ), "HIGH SCORE  " + highScore, style );

		*/
		GUI.Label( Rect( Screen.width / 2 -100, 200, 200, 50 ), "NOW SCORE  " + now, style2 );
		GUI.Label( Rect( Screen.width / 2 -100, 300, 200, 50 ), "RESTART : PUSH START" , style2 );

		if( Input.GetKeyDown("space")) {
			Application.LoadLevel( "start" );
		}
	}
}

