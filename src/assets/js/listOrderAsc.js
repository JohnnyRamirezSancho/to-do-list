export default function listOrderAsc(list, key) {
    list.sort(function (a, b) { return a.name > b.name ? 1 : b.name > a.name ? -1 : 0 });
}
