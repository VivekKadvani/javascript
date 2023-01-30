let data = '{"emp" : [{"name" : "vivek","age":22},{"name":"vaibhav","age":23}]}'
const js_d = JSON.parse(data)
// console.log(js_d.emp[0].name)
// console.log(js_d.emp[0].age)

for (let i in js_d.emp){
    console.log(js_d.emp[i].name + " "+ js_d.emp[i].age)
}