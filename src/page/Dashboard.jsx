import Profile from '../asset/profile.jpeg';
export default function Dashboard() {
	return (
		<section className="p-4 lg:p-10 w-full h-full">
			<div className="h-2/6 text-gray-700">
				<header className="flex justify-between">
					<h1 className="text-2xl">
						<span className="font-bold">Mr.</span> PERMENT
					</h1>
					<div>
						<input
							placeholder="Search"
							className="border hidden lg:block rounded-xl border-gray-100 py-2 px-3"
							type="text"
						/>
					</div>
				</header>
				<section className="mt-5">
					<h2>Create New Group</h2>
					<div className="mt-5 flex items-center space-x-5">
						<button className="h-24 w-28 bg-[#3AC6D5] text-white rounded-lg">Add New</button>
						<button className="h-24 w-28 bg-[#3AC6D5] text-white rounded-lg">Join a group</button>
					</div>
					<div className="h-4/6 w-full h-full overflow-auto">
						<h2>Existing Group</h2>
						<div className="bg-[#F6F8FB] w-full h-full rounded-lg mt-5 p-5">
							<section className="grid grid-cols-7 gap-5 p-5">
								<div
									style={{
										backgroundColor: 'rgba(58, 198, 213, 0.1)'
									}}
									className="col-span-6 p-5 grid grid-cols-7 gap-5 rounded-xl"
								>
									<div className="w-full h-full flex items-center justify-center">
										<img className="w-24 h-24 rounded-full" src={Profile} alt={Profile} />
									</div>
									<div className="col-span-6 col-start-2 text-gray-600">
										<h1 className="text-lg font-bold">Group FRI Heitz</h1>
										<p className="text-sm text-justify">
											Group yang berfokus untuk memenuhi tujuan akreditas fakultas rekayasa
											industri yang ada pada Universitas Telkom.
										</p>
										<p className="text-xs mt-5 italic">Goals / Progress : 0%</p>
										<div className="flex justify-end">
											<p className="text-xs italic">Member: alwanly, hamdandz, mfurqon</p>
										</div>
									</div>
								</div>
								<div className="col-span-1 flex items-center space-y-5">
									<div className="flex flex-col space-y-2">
										<button className="border bg-[#3AC6D5] w-28 text-white rounded-md h-14">
											Edit
										</button>
										<button className="border bg-[#BB3227] w-28 text-white rounded-md h-14">
											Delete
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
			<div className="h-4/6 bg-white-500" />
		</section>
	);
}
