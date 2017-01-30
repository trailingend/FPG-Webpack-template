import '../style/style.scss';
import ExampleClass from './example-class';
import {testPlatform} from './utils';
import $ from 'jquery';

window.platform = testPlatform();

$(window).on('load', ()=>{
	const exampleInstance = new ExampleClass();
});
