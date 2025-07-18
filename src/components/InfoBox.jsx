import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./styles/InfoBox.css"

export default function InfoBox({info}) {
    const Init_img = "https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=tBFS70k3IOnu9KTQpTvaX4YcYlAopW1McMzTh1IbQ-c=";
    const veryColdImg = "https://images.unsplash.com/photo-1644716276377-59d4908d3729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vdyUyMENvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const coldImg = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
    const pleasantImg = "https://plus.unsplash.com/premium_photo-1672796530404-3349ffea0f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxlYXNhbnQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const summer = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const hotSummer = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rainy = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.temp < 5 ? veryColdImg : info.humidity > 80 ? rainy : info.temp < 12 ? coldImg : info.temp < 22 ? pleasantImg : info.temp < 32 ? summer : hotSummer
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p><b>Temprature : { info.temp }&deg;C</b></p>
                            <p>Humidity : { info.humidity }&deg;C</p>
                            <p>Min Temp : { info.minTemp }&deg;C</p>
                            <p>Max Temp : { info.maxTemp }&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like { info.feelsLike }&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}