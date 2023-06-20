import React,{ useState, useEffect } from 'react';
import './style.css';
import mockData from './Data/mockData.jsx';
import CardList from './component/CardList';
import FilterDropdown from './component/FilterDropdown';
import SearchBar from './component/SearchBar';
import Tabs from './component/Tabs';
import Pages from './component/Pages';


export default function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);


  useEffect(() => {
    // set data inittally
    setCards(mockData.data);
    setFilteredCards(mockData.data);
  }, []);

  useEffect(() => {

    const filtered = cards.filter((card) => {
      const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = filterType === '' || card.card_type === filterType;
      return nameMatch && typeMatch;
    });
    setFilteredCards(filtered);
  }, [cards, searchTerm, filterType]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);

  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    let filtered = [];
    if (tab === 'Your') {
      filtered = cards.filter((card) => card.owner_id === 1);
    } else if (tab === 'all') {
      filtered = cards;
    } else if (tab === 'block') {
      filtered = cards.filter((card) => card.status === 'block');
    }
    setFilteredCards(filtered);
  };

  // Get current cards based on pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);



  return (
    <div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <FilterDropdown filterType={filterType} onChange={handleFilterChange} />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      {currentCards.length > 0 ? (
        <CardList cards={currentCards} />
      ) : (
        <p className="card-message">No cards found...</p>
      )}
      <Pages totalCards={mockData.data.length}
        perPage={mockData.per_page}
        filteredCards={filteredCards}
        onPageChange={handlePageChange} />
    </div>
  );
}
