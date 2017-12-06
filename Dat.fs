/*{
	"DESCRIPTION": "",
	"CREDIT": "",
	"ISFVSN": "2",
	"CATEGORIES": [
		"XXX"
	],
	"INPUTS": [
		{
			"NAME": "inputImage",
			"TYPE": "image"
		},
		{
			"NAME": "boolInput",
			"TYPE": "bool",
			"DEFAULT": 0.0
		},
		 
		
		{
			"NAME": "floatInput",
			"TYPE": "float",
			"DEFAULT": 0.0,
			"MIN": 0.0,
			"MAX": 1.0
		},
		 	],
		
}*/


void main()	{
	vec4		inputPixelColor;
	vec2		loc = vv_FragNormCoord.xy;
	
	loc = mod(loc, 1.0);
	loc.x = loc.x + floatInput;
	 

	inputPixelColor = IMG_NORM_PIXEL(inputImage, loc);
	if (boolInput) {
		
		inputPixelColor.rbg = 1.0 - inputPixelColor.rbg;
		
	}
	
	
	
	
	gl_FragColor = inputPixelColor;
}
