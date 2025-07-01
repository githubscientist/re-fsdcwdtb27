import { Outlet } from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Home Page!</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>Sidebar</div>
                <div><Outlet /></div>
            </div>
        </div>
    )
}

export default Home;