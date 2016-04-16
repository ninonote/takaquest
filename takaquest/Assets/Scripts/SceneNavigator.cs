using UnityEngine;
using System.Collections;

public class SceneNavigator : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Debug.Log("navi");
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown("space")) {
			Debug.Log("main");
			Application.LoadLevel ("main");
		} else if (Input.GetKeyDown (KeyCode.F)) {
			Screen.fullScreen = !Screen.fullScreen;
		}
	}
}