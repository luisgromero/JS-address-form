/*
 * Code Exercise -- Form Javacript/jQuery Validation Script
 * Author: Luis G Romero
 * Website: www.luisgromero.com/projects/jsform
 * 
 * Date: 3/12/2014
 * Version: 1.0
 */

$(document).ready(function(){
var errors=new Array();	

/* ==============================================
    Required fields - hover feedback
   ============================================== */  
   $('.required_notification').hide();
   $('input[type=text]').hover(function(){
	   	if(!$(this).val()){
	   		$(this).prev('.required_notification').toggle(); 		
	    }
   });
   
/* ==============================================
    Required fields - entering values feedback
   ============================================== */ 
      
   $('input[type=text]').on('keyup',function(){
   	    input=$(this);
   		input.prev('.required_notification').hide();
   		input_name=$(this).attr('name');
   		input_value=$(this).val();
   		validate_fields(input,input_name,input_value);		
   });
   
   function validate_fields(input,input_name,input_value) { 
   		switch (input_name){
   			case ("house_number"):
   				check_numerical_values(input,input_name,input_value,0);
   				break;
   			case ("street"):
   				check_text_values(input,input_name,input_value,1);
   				break;
   			case ("city"):
   				check_text_values(input,input_name,input_value,2);
   				break;	
   			case ("state"):
   				check_text_values(input,input_name,input_value,3);
   				break;
   			case ("zipcode"):
   				check_numerical_values(input,input_name,input_value,4);
   				break;
   			case ("unit"):
   				check_numerical_values(input,input_name,input_value,5);
   				break;				
   			default:   						
   		}
   }
      
   function check_numerical_values(input,input_name,input_value,num){
   		if(input_name=='zipcode'){
   			regex= /^\d*[0-9]{5}(|\d*[0-9]{5}|-\d*[0-9]{4})?$/;
	   		if(!regex.test(input_value)){
	   			$(input).prev('.required_notification').text('Not a valid ' + input_name).show();
	   			errors[num]=true;	   			
	   		}else{
	   			errors[num]=false;
	   		}
	   		
   		}else{
   			regex= /^\d*[0-9]?$/;
	   		if(!regex.test(input_value)){
	   			$(input).prev('.required_notification').text('Not a valid ' + input_name.replace('_', ' ')).show();
	   			errors[num]=true;	   			
	   		}else{
	   			errors[num]=false;
	   		}
   		}	
   }
   
   function check_text_values (input,input_name,input_value,num){
     	regex= /^\s*[a-zA-Z,\s]+\s*$/;
	   	if(!regex.test(input_value)){
	   		$(input).prev('.required_notification').text('Not a valid ' + input_name + " name").show();
	   		errors[num]=true;
	   	}else{
	   		errors[num]=false;
	    }
   }
   
/* ==============================================
    Submit button - validation
   ============================================== */
  
   $('#submit_btn').on('click',function(e){
   		e.preventDefault();
   		$('input[type=text]').each(function(){
   			if(!$(this).val()){
	   			$(this).prev('.required_notification').show();
	   		} 		    	
   		});	
   		check_for_errors();   		
   });
   
   function check_for_errors(){
   	 	if(errors.length>=5){
   	 		if ( $.inArray(true, errors) > -1 ) {
    			alert('There are errors in this form. Please fix errors before submitting.');
			}else{
				alert('Hoooray! Submission was successful!');	
			}
   	 	} 	 	
   }
});
