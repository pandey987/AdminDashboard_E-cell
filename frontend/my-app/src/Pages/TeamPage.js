// import '../App.css';
import Footer from '../components/footer';
import Card3 from '../components/Card3';
import Team from '../components/Team';
import photo1 from '../Assets/Untiteled.jpg';
// import photo2 from '../Assets/Untiteled1.jpg';
import photo3 from '../Assets/Untiteled2.jpg';
// import photo4 from '../Assets/Untiteled3.jpg';
import photo5 from '../Assets/Untiteled4.jpg';
// import photo6 from '../Assets/Untiteled5.jpg';
import photo7 from '../Assets/Untiteled6.jpg';
import photo8 from '../Assets/Untiteled7.jpg';
import photo9 from '../Assets/Untiteled8.jpg';
import photo10 from '../Assets/Untiteled9.jpg';
// import photo11 from '../Assets/Untiteled10.jpg';
import photo12 from '../Assets/Untiteled11.JPG';
import photo13 from '../Assets/Untiteled12.jpg';
import photo14 from '../Assets/Untiteled13.jpg';
import photo15 from '../Assets/Untiteled14.jpg';
// import photo16 from '../Assets/Untiteled15.jpg';
// import photo17 from '../Assets/Untiteled16.jpg';
// import photo18 from '../Assets/Untiteled17.jpg';
import photo19 from '../Assets/Untiteled18.jpg';
import photo20 from '../Assets/Untiteled19.jpg';
import photo21 from '../Assets/Untiteled20.jpg';
import photo22 from '../Assets/Untiteled21.jpeg';
import photo23 from '../Assets/Untiteled22.jpg';
import photo24 from '../Assets/Untiteled23.jpg';



const teams = [{ Team_name: "Management and Logistics Team", Team_members: [{ Name: "Hemant Gupta", Position: "Lead", Photo: photo1 }, { Name: "Shubham Mohanty", Position: "Core Member", Photo: photo22 }, { Name: "Shubham Verma", Position: "Core Member", Photo: photo3 }] },
{ Team_name: "Event and Contents Team", Team_members: [{ Name: "Divij Gupta", Position: "Lead", Photo: photo22 }, { Name: "Ajinkya Pandey", Position: "Core Member", Photo: photo5 }, { Name: "Dasari Pranavesh Reddy", Position: "Core Member", Photo: photo22 }] },
{ Team_name: "Finance and Capital Team", Team_members: [{ Name: "D Vishnu Aravind", Position: "Lead", Photo: photo7 }, { Name: "Allu Sai Kowshik", Position: "Core Member", Photo: photo8 }, { Name: "Shruti Dhariya", Position: "Core Member", Photo: photo9 }] },
{ Team_name: "Public Relations and Outreach Team", Team_members: [{ Name: "Komminemi Sai Vignesh", Position: "Lead", Photo: photo22 }, { Name: "M Manukrishna", Position: "Core Member", Photo: photo22 }, { Name: "Yuvraj", Position: "Core Member", Photo: photo12 }] },
{ Team_name: "Branding and Promotions Team", Team_members: [{ Name: "Ajitesh Ghoregarekar", Position: "Lead", Photo: photo13 }, { Name: "Saumya Sinha", Position: "Core Member", Photo: photo14 }, { Name: "Siddhant Madhukar", Position: "Core Member", Photo: photo15 }] },
{ Team_name: "Web Operations Team", Team_members: [{ Name: "Adnan Rizvi", Position: "Lead", Photo: photo22 }, { Name: "Tilak Reddy", Position: "Core Member", Photo: photo22 }, { Name: "Viramgama Jaimin", Position: "Core Member", Photo: photo22 }] },
{ Team_name: "Community Management Team", Team_members: [{ Name: "Abhishek Anand", Position: "Lead", Photo: photo19 }, { Name: "Hemashree", Position: "Core Member", Photo: photo20 }, { Name: "Anupam Tripathi", Position: "Core Member", Photo: photo22 }] },
{ Team_name: "Media and Engagement Team", Team_members: [{ Name: "Shubham Ahirwar", Position: "Lead", Photo: photo22 }, { Name: "Manan Chavda", Position: "Core Member", Photo: photo23 }, { Name: " M. Harshit Reddy", Position: "Core Member", Photo: photo24 }] }];

function TeamPage() {
    return (
        <>
            <div style={{display:'flex',textAlign:'center', flexDirection:'column',margin:"5%"}}>
                <h1 style={{ color: 'white' }}>HEAD</h1>
                <div style={{display:'flex',justifyContent:'center'}}><Card3 name={"Vaibhav Mishra"} position={"Head"}></Card3></div>
                {teams.map((team, index) => { return <Team team_name={team.Team_name} team_members={team.Team_members} key={index}></Team> })}
            </div>

        </>
    );
}

export default TeamPage;
