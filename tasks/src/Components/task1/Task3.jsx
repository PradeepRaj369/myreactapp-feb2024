import React from 'react'

const Task3 = () => {
  return (
    <>
    <table border={""}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Country Code</th>
                <th>Mobile Number</th>
                <th>Landline Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Pradeep</td>
                <td>Web Developer</td>
                <td>91</td>
                <td colSpan={2}>987654348</td>
            </tr>
            <tr>
                <td>2</td>
                <td >Jai Priya</td>
                <td rowSpan={2}>Developer</td>
                <td>91</td>
                <td>9876543447</td>
                <td>987567007</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Kiran</td>
                {/* <td>Developer</td> */}
                <td>91</td>
                <td>9876543447</td>
                <td>987567007</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Karthik</td>
                <td>Senior Developer</td>
                <td>91</td>
                <td colSpan={2}>987654378</td>
                {/* <td>567328900-</td> */}
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default Task3
