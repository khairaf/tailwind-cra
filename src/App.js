import React from 'react';
import logo from './logo.svg';


function App() {
  return (
	<div>
		<div className="max-w-sm mx-auto flex p-6 bg-black rounded-lg shadow-xl mt-4">
			<div className="flex-shrink-0">
				<img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
			</div>
			<div className="ml-6 pt-1">
				<h4 className="text-xl text-gray-500 leading-tight">ChitChat</h4>
				<p className="text-base text-gray-600 leading-normal">You have a new message!</p>
			</div>
		</div>
		<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
		  <div className="sm:flex sm:items-center px-6 py-4">
			<img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={logo} alt="Woman's Face"/>
			<div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
			  <p className="text-xl leading-tight">Erin Lindford</p>
			  <p className="text-sm leading-tight text-gray-600">Customer Support Specialst</p>
			  <div className="mt-4">
				<button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
			  </div>
			</div>
		  </div>
		</div>
	
		<div className="md:flex mx-auto p-6 bg-black rounded-lg shadow-xl mt-4">
		  <div className="md:flex-shrink-0">
			<img className="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Woman paying for a purchase"/>
		  </div>
		  <div className="mt-4 md:mt-0 md:ml-6">
			<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
			<a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
			<p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
		  </div>
		</div>
		<div className="mt-4 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"></div>
		
		
	</div>
  );
}

export default App;
