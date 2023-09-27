export default function CommunityPost() {
    let title = "UI/UX"
    return (
        <div className="bg-white w-auto shadow-md p-10 rounded-lg p-4 mb-4">
            {/* User Profile Photo */}
            <div className="flex">
                <img
                    src="\icon\user.png"
                    alt="User Profile"
                    className="w-12 h-12  rounded-md object-cover mb-2"
                />

                {/* User Name and Time Posted */}
                <div className="flex space-x-96">
                    <div className=" mb-2 px-3 ">
                        <p className="text-lg font-semibold">User Name</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                    <div className="flex bg-[#EEE5FF] px-7 h-6 rounded-md">
                        <p>UI/UX</p>
                    </div>
                </div>
            </div>

            {/* Post Text */}
            <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sem a mi
                gravida euismod.
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-96 mt-4">
                <div className="flex space-x-5">
                    <button className="bg-gray-200 text-gray-600 py-2 flex px-4 rounded-lg hover:bg-gray-600">
                        <img className="h-5 pr-3" src="\icon\msg.svg"></img> Add Response
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                        <img src="\icon\save.png" alt="" />
                    </button>
                </div>
                <div className="flex">
                    <button className="text-gray-500 hover:text-gray-700">
                        <img src="\icon\tabler_dots.png" className="h-5 " alt="" />
                    </button>
                </div>

            </div>
        </div>
    )
}