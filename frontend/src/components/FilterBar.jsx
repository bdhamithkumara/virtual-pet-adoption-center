import React from 'react'

function FilterBar({onMoodChange}) {
  const moods = ['', 'Happy', 'Excited', 'Sad'];
  return (
    <div className="mb-6">
    <label className="mr-2 font-semibold">Filter by Mood:</label>
    <select
      onChange={(e) => onMoodChange(e.target.value)}
      className="p-2 border rounded"
    >
      {moods.map((mood) => (
        <option key={mood || 'all'} value={mood}>
          {mood || 'All'}
        </option>
      ))}
    </select>
  </div>
  )
}

export default FilterBar