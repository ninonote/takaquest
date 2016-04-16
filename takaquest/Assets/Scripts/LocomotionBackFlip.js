#pragma strict

function Start () {
}

function Update () {

	var animator = GetComponent( Animator );

	if( Input.GetKey( KeyCode.Y ) )
	{
		animator.SetBool( "BackFlip", true );
	}

	var state : AnimatorStateInfo = animator.GetCurrentAnimatorStateInfo(0);

	if( state.IsName( "Locomotion.BackFlip" ) )
	{
		animator.SetBool( "BackFlip", false );
	}
}