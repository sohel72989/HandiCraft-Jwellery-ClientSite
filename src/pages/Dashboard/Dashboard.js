import * as React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DashboradHome from './DashbosrdHome/DashboradHome';
import Pay from './UserDashboard/Pay/Pay';
import MyOrders from './UserDashboard/MyOrders/MyOrders';
import UserReview from './UserDashboard/UserReview/UserReview';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from './AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './AdminDashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './AdminDashboard/AddProduct/AddProduct';
import ManageAllProducts from './AdminDashboard/ManageAllProducts/ManageAllProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ProductsUpdate from './AdminDashboard/ManageAllProducts/ProductsUpdate';

const drawerWidth = 220;

function Dashboard(props) {
    const { admin, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#243238", height: "100vh", color: "lightgray" }}>
            <Toolbar >
                <h4 className="text-bold d-inline" style={{ color: "lightgreen" }}>JWELLERY.COM</h4>
            </Toolbar>
            <Divider />

            {
                admin ?
                    <Box>
                        <Link to={`${url}/manageAllOrders`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Manage All Orders</Button></Link>
                        <Link to={`${url}/addProduct`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Add Product</Button></Link>
                        <Link to={`${url}/manageAllProducts`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Manage All Products</Button></Link>
                        <Link to={`${url}/makeAdmin`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Make Admin</Button></Link>
                    </Box>
                    :
                    <Box>
                        <Link to={`${url}`} className="text-decoration-none"
                        ><Button color="inherit"
                            className="w-100 text-white py-2 mb-2">Dashboard</Button></Link>
                        <Link to={`${url}/myOrders`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">My Orders</Button></Link>
                        <Link to={`${url}/pay`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Payment</Button></Link>
                        <Link to={`${url}/userReview`} className="text-decoration-none"><Button color="inherit" className="w-100 text-white py-2 mb-2">Review</Button></Link>
                    </Box>
            }
            <Link to="/home"><button onClick={logout} className="btn btn-purchase w-100">LogOut</button></Link>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#243238'

                }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link to="/home" className="text-decoration-none"><Button color="inherit"
                            className="w-100 text-white py-2 mb-2 fs-30"
                        >Home</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboradHome></DashboradHome>
                    </Route>
                    <Route path={`${path}/pay/:productId`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <UserReview></UserReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageAllProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllProducts/:id`}>
                        <ProductsUpdate></ProductsUpdate>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
