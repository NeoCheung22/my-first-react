export default function Title({mainTitle, subTitle}) {
  return (
    <div>
       <h1 style={{borderBottom: '5px solid red', textAlign: 'center' }}>
         {mainTitle} <br/>
         {subTitle} <br/> 
       </h1>
    </div>
  );
}