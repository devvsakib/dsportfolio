import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion'

const Flickr = () => {
  const [query, setQuery] = useState('cat')
  const [data, setData] = useState();
  const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&"
  const params = `api_key=6f58e72822c468900d2ed50df672f936&text=${query ? query : "cat"}&format=json&nojsoncallback=1&page=1&per_page=10`
  const secret = "b1856eb01a47f215"
  useEffect(() => {
    fetch(url + params)
      .then(res => res.json())
      .then(data => {
        console.log(data.photos.photo);
        setData(data.photos.photo)
      })

  }, [query])


  return (
    <div>
      <h1>Flickr</h1>
      <div>
        {/* search */}
        <input type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className='grid grid-cols-4 gap-10 max-w-[1200px] mx-auto'>
        {
          data && data.map((item, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5
                }
              }}

            >
              <img className='object-cover h-full' src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="" />
            </motion.div>
          ))
        }
      </div>
    </div >
  )
}

export default Flickr