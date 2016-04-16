#pragma strict

function OnTriggerEnter( col : Collider )
{
	if( col.tag == "Player" )
	{
		// Prints 0
		print (Time.time);
		// Show Game Over
var guiObj : GameObject = new GameObject("GUI Text");  //Hierarchy に表示される名前
guiObj.AddComponent.<GUIText>();
guiObj.GetComponent.<GUIText>().transform.Translate(0.5f, 0.5f, 0);
guiObj.GetComponent.<GUIText>().anchor = TextAnchor.MiddleCenter;
guiObj.GetComponent.<GUIText>().alignment = TextAlignment.Center;
guiObj.GetComponent.<GUIText>().fontSize = 170;
guiObj.GetComponent.<GUIText>().fontStyle = FontStyle.Bold;
guiObj.GetComponent.<GUIText>().color = Color.red;
guiObj.GetComponent.<GUIText>().text = "GAME OVER";
		// Waits 5 seconds
		yield WaitForSeconds (5);
		// Prints 5.0
		print (Time.time);

		Application.LoadLevel( "start" );
	}
}