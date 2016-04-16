#pragma strict

static var time : float;

function Start()
{
	time = 0;
}

function Update()
{
	if( GoalArea.goal == false )
	{
		time += Time.deltaTime;
	}

	var now : int = time;
	GetComponent.<GUIText>().text = "<Color=white>TIME :  " +
		now.ToString() + "</Color>";
}
