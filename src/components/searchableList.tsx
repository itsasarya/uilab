import { useState } from "react";

interface SearchableListProp {
    items: string[]
}

export default function SearchableList({ items }: SearchableListProp) {
    const [query, setQuery] = useState("")
    const filtered = items.filter((item) => item.toLowerCase().includes(query.toLocaleLowerCase()))

    return (
        <div className="w-full max-w-sm mx-auto spacey-y-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search.." className="w-full px-3 py-2 border rounded-lg focus:outline-none foucus:ring" />
            <ul className="boarder rounded-lg divide-y">
                {filtered.length > 0 ? (filtered.map((item) => (<li key={item} className="px-3 py-2 hover:bg-grey-50">{item}</li>))) : <li className="px-3 py-2 text-grey-50 italic">No results found</li>}
            </ul>
        </div>
    )
}