uniform sampler2D imgTexture;

varying vec2 vUv;
float PI = 3.141592653589793238;

void main()	{
	vec4 img = texture2D(imgTexture, vUv);
	gl_FragColor = img;
}