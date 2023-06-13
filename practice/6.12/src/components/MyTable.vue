<template>
    <table>
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="v in data">
                <td>{{ v.id }}</td>
                <td>{{ v.name }}</td>
                <td>{{ v.age }}</td>
                <td>{{ v.sex }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props:['data']
}
</script>