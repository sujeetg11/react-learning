const person = {
    name : "sujeet",
    theme :{
        backgroundColor: 'black',
        color : 'pink',
    }
};



export default function app() {
  return (
    <div style={person.theme} >
      <h1>{person.name}'s Todolist</h1>
      <img 
      className='avatar'
      src="D:\sujeet photo\IMG_20190505_181721" 
      alt="" />
      
    

    </div>
  );
};
