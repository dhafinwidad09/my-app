import { NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../asset/dashboard.png';
import Profile from '../asset/profile.jpeg';
import React from 'react'
export default function Layout() {
	const [ hidden, setHidden ] = React.useState(false);
	return (
		<main className="h-screen w-screen">
			<section className="w-full h-full grid grid-cols-1 lg:grid-cols-7 bg-[#00917C] p-0 lg:p-5">
				<section
					className={`${hidden
						? 'transform -translate-x-full lg:-translate-x-0 lg:transform duration-500'
						: 'transform -translate-x-0 transition duration-500'} col-span-1 absolute z-10 bg-[#00917C] p-5 lg:p-0 lg:relative w-full h-full pt-10`}
				>
					<header className="text-white h-1/6 mb-5 flex justify-between">
						<div>
							<img className="rounded-full h-16 w-16 mb-5" src={Profile} alt="" />
							<h1 className="text-lg font-bold">Muhammad Dhafin Widad</h1>
							<p className="text-sm">Fullstack Developer</p>
						</div>
						<div className="lg:hidden block">
							<button
								onClick={() => {
									setHidden(true);
								}}
							>
								X
							</button>
						</div>
					</header>
					<nav className="w-full h-4/6 mb-5">
						<div className="grid grid-cols-1 gap-10">
							<NavLink className={'text-white'} to="/dashboard">
								<span className="flex items-center">
									<img className="h-8 w-8" src={Dashboard} alt="" />
									<p className="ml-5">Dashboard</p>
								</span>
							</NavLink>
							<NavLink className={'text-white'} to="/dashboard">
								<span className="flex items-center">
									<img className="h-8 w-8" src={Dashboard} alt="" />
									<p className="ml-5">Task</p>
								</span>
							</NavLink>
							<NavLink className={'text-white'} to="/dashboard">
								<span className="flex items-center">
									<img className="h-8 w-8" src={Dashboard} alt="" />
									<p className="ml-5">Group</p>
								</span>
							</NavLink>
							<NavLink className={'text-white'} to="/dashboard">
								<span className="flex items-center">
									<img className="h-8 w-8" src={Dashboard} alt="" />
									<p className="ml-5">Target</p>
								</span>
							</NavLink>
							<NavLink className={'text-white'} to="/dashboard">
								<span className="flex items-center">
									<img className="h-8 w-8" src={Dashboard} alt="" />
									<p className="ml-5">Settings</p>
								</span>
							</NavLink>
						</div>
					</nav>
					<footer className="h-1/6">
						<NavLink className={'text-white'} to="/dashboard">
							<span className="flex items-center">
								<img className=" h-8 w-8" src={Dashboard} alt="" />
								<p className="ml-5">Logout</p>
							</span>
						</NavLink>
					</footer>
				</section>
				<section className="col-span-1 lg:col-span-6 w-full bg-white lg:rounded-3xl overflow-auto">
					<div className="block lg:hidden flex items-center justify-end">
						<button
							onClick={() => {
								setHidden(false);
							}}
						>
							Menu
						</button>
					</div>
					<Outlet />
				</section>
			</section>
		</main>
	);
}
