import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomerModal from "../Component/CustomerModal";
import "./Lab_05.css"
import axios from "axios";
const Lab_5 = () => {
    return (
        <div class="grid grid-rows3 grid-cols-4 gap-2">
            <div class="row-span-3 col-span-1 border border-2">
                <div className="grid grid-cols-1 gap-2">
                    <img src="../src/FEData/logo2.png" alt="error" />
                    <NavLink to="/Lab_05/dashboard" className="nav-link" activeClassName="active" >
                        Dashboar
                    </NavLink>
                    <NavLink to="/Lab_05/project" className="nav-link" >
                        Project
                    </NavLink>
                    <NavLink to="/Lab_05/theme" className="nav-link"  >
                        Theme
                    </NavLink>
                    <NavLink to="/Lab_05/analytics" className="nav-link" >
                        Analytics
                    </NavLink>
                    <NavLink to="/Lab_05/messages" className="nav-link"  >
                        Messages
                    </NavLink>
                    <NavLink
                        to="/Lab_05/integrations"
                        className="nav-link" >
                        Integrations
                    </NavLink>
                    <div style={{ backgroundColor: "#f0f6ff" }} className="flex flex-col justify-content-center align-items-center">
                        <img src="../src/FEData/v2.png" alt="error" />
                        <h2>V2.0 is available</h2>
                        <div className="border-2 border-blue-500 w-50 rounded">
                            <button className="w-full text-blue-500 bg-transparent py-2  " >try now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-span-3 col-span-3 ">
                <Outlet />
            </div>
        </div>
    )
}
const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleFormSubmit = (data) => {
        if (customers.find(customer => customer.name === data.name)) {
            alert("Customer already exists!");
            return;
        }
        data.img = '../src/FEData/Avatar (1).png'; // Set a default image or handle it as needed
        setCustomers((prevCustomers) => [...prevCustomers, data]);
        axios.post('https://67f5ddfa913986b16fa5c168.mockapi.io/admin/Report', data)
            .then((response) => {

                console.log('Customer added:', response.data);
            }).catch((error) => {
                console.error('Error adding customer:', error);
            });
        closeModal();
    };
    const [selectedCutomer, setSelectedCustomer] = useState({
        name: '', // default empty string
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New', // default status});
    });
    const handleCustomerClick = (customer) => {
        setSelectedCustomer(customer);
        openModal();
    }
    const [customers, setCustomers] = useState([
        {
            name: 'Elizabeth Lee',
            company: 'AvatarSystems',
            orderValue: '$359',
            orderDate: '10/07/2023',
            status: 'New',
            avatar: '../src/FEData/Avatar (1).png',
        },
        // {
        //     name: 'Carlos Garcia',
        //     company: 'SmoozeShift',
        //     orderValue: '$747',
        //     orderDate: '24/07/2023',
        //     status: 'In Progress',
        //     img: '../src/FEData/Avatar (2).png',
        // },
        // {
        //     name: 'Amanda Clark',
        //     company: 'TechNova',
        //     orderValue: '$1,120',
        //     orderDate: '05/08/2023',
        //     status: 'Completed',
        //     img: '../src/FEData/Avatar (3).png',
        // },
        // {
        //     name: 'Nathan Young',
        //     company: 'CloudNet',
        //     orderValue: '$940',
        //     orderDate: '17/08/2023',
        //     status: 'In Progress',
        //     img: '../src/FEData/Avatar (4).png',
        // },
        // {
        //     name: 'Sarah Kim',
        //     company: 'BrightPath',
        //     orderValue: '$628',
        //     orderDate: '21/08/2023',
        //     status: 'New',
        //     img: '../src/FEData/Avatar (5).png',
        // },
    ]);
    useEffect(() => {
        axios
            .get('https://67f5ddfa913986b16fa5c168.mockapi.io/admin/Report')
            .then((response) => {
                const updatedCustomers = response.data.map((customer) => {
                    // Chọn ngẫu nhiên một status
                    const statuses = ['New', 'In Progress', 'Completed'];
                    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                    // Kiểm tra tính hợp lệ của orderDate trước khi chuyển đổi
                    let formattedOrderDate = formatDate(customer.orderDate);

                    // Cập nhật status cho customer
                    return { ...customer, status: randomStatus, orderDate: formattedOrderDate };
                });
                setCustomers(updatedCustomers);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString); // Convert the string to a Date object
        const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and ensure 2-digit format
        const year = date.getFullYear(); // Get the year
        return `${day}/${month}/${year}`; // Format as dd/MM/yyyy
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'New':
                return 'bg-blue-100 text-blue-600';
            case 'In Progress':
                return 'bg-yellow-100 text-yellow-600';
            case 'Completed':
                return 'bg-green-100 text-green-600';
            default:
                return '';
        }
    };
    return (
        <div>
            <div class="border border-2">
                <div>
                    <div className="flex items-center mt-2">
                        <h3 className="flex-1 text-left text-pink-500 ms-3">Dashboard</h3>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="search"
                                className="px-2 border border-black rounded bg-gray-50 w-full" />
                        </div>
                        <img className="mx-3" src="../src/FEData/notifi.png" alt="error" />
                        <img className="mx-3" src="../src/FEData/question.png" alt="error" />
                        <img className="mx-3" src="../src/FEData/small_user_img.png" alt="error" />
                    </div>
                </div>
                <hr />
                <h3 className="text-pink-500 text-left ms-3">Overview</h3>
                <div className="grid grid-cols-3 gap-2">
                    <div style={{ backgroundColor: '#fef0f5' }} className="flex justify-content-between border border-2 p-3">
                        <div className="flex flex-col">
                            <h6 className="text-start">Turnover</h6>
                            <h1 className="text-start">$92,405</h1>
                            <span className="text-start">5.39% <span> period of change</span> </span>
                        </div>
                        <img style={{ backgroundColor: '#fef0f5' }} className="self-start" src="../src/FEData/Button 1509.png" alt="err" />
                    </div>
                    <div style={{ backgroundColor: '#f0f6ff' }} className="flex justify-content-between border border-2 p-3">
                        <div className="flex flex-col ">
                            <h6 className="text-start">Turnover</h6>
                            <h1 className="text-start">$92,405</h1>
                            <span className="text-start">5.39% <span> period of change</span> </span>
                        </div>
                        <img style={{ backgroundColor: '#f0f6ff' }} className="self-start" src="../src/FEData/Button 1529.png" alt="err" />
                    </div>
                    <div style={{ backgroundColor: '#f1f8fd' }} className="flex justify-content-between border border-2 p-3">
                        <div className="flex flex-col">
                            <h6 className="text-start">Turnover</h6>
                            <h1 className="text-start">$92,405</h1>
                            <span className="text-start">5.39% <span> period of change</span> </span>
                        </div>
                        <img style={{ backgroundColor: '#f1f8fd' }} className="self-start" src="../src/FEData/Button 1530.png" alt="err" />
                    </div>
                </div>
            </div>
            <div class="mt-2 border border-2">
                <div className="d-flex justify-content-start mt-2">
                    <h2 className="ms-3 me-auto">Detail report</h2>
                    <button style={{ borderColor: '#fef0f5' }} className="bg-white border border-2  flex items-center gap-2 px-3 py-1 rounded me-2" onClick={openModal} ><img src="../src/FEData/Download.png" alt="err" /> Import</button>
                    <button style={{ borderColor: '#fef0f5' }} className="bg-white border border-2  flex items-center gap-2 px-3 py-1 rounded"><img src="../src/FEData/Move up.png" alt="err" /> Export</button>
                    <CustomerModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} data={selectedCutomer} />
                </div>
                <div className="overflow-x-auto p-4">
                    <table className="min-w-full border rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 text-gray-600 text-sm">
                            <tr>
                                <th className="bg-white text-left px-4 py-3">
                                    <input type="checkbox" />
                                </th>
                                <th className="text-left px-4 py-3">Customer Name</th>
                                <th className="text-left px-4 py-3">Company</th>
                                <th className="text-left px-4 py-3">Order Value</th>
                                <th className="text-left px-4 py-3">Order Date</th>
                                <th className="text-left px-4 py-3">Status</th>
                                <th className="text-left px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-200">
                            {customers.map((cust, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="py-1">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="flex items-center px-1 py-1">
                                        <img src={cust.avatar} alt={cust.name} className="w-8 h-8 rounded-full" />
                                        <span className="font-semibold text-gray-800 ms-1">{cust.name}</span>
                                    </td>
                                    <td className="text-start px-1 py-3 text-gray-700">{cust.company}</td>
                                    <td className="px-1 py-3 text-gray-700">{cust.orderValue}</td>
                                    <td className="px-1 py-3 text-gray-700">{cust.orderDate}</td>
                                    <td className="px-1 py-1">
                                        <span
                                            className={`text-xs px-2 py-2 rounded-full ${getStatusColor(cust.status)}`}
                                        >
                                            {cust.status}
                                        </span>
                                    </td>
                                    <td className="px-1 py-1">
                                        <button className="bg-white border border-2" title="Edit" onClick={() => handleCustomerClick(cust)} >✏️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
const Project = () => {
    return (
        <>
            <h1>Project</h1>
        </>
    )
}
const Theme = () => {
    return (
        <>
            <h1>Theme</h1>
        </>
    )
}
const Analytics = () => {
    return (
        <>
            <h1>Analytics</h1>
        </>
    )
}
const Messages = () => {
    return (
        <>
            <h1>Messages</h1>
        </>
    )
}
const Integrations = () => {
    return (
        <>
            <h1>Integrations</h1>
        </>
    )
}
export { Dashboard, Project, Theme, Analytics, Messages, Integrations };
export default Lab_5;