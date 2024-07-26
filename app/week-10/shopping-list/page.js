"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemList from '@/app/week-7/item-list';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      loadItems();
    }
  }, [user, router]);

  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const openNewItemForm = () => setNewItemFormOpen(true);
  const closeNewItemForm = () => setNewItemFormOpen(false);

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-lightgray">
      <h1 className="text-4xl font-bold ml-20 text-emerald-800">SHOPPING LIST</h1>
      <div>
        <button
          className='ml-32 mt-5 mb-5 rounded-md bg-black text-white h-10 w-40'
          onClick={openNewItemForm}
        >
          Add New Item
        </button>
      </div>
      {
        isNewItemFormOpen && (
          <NewItem closeFormFunc={closeNewItemForm} onAddItem={handleAddItem} />
        )
      }
      <div className="flex">
        <div className="w-1/2">
          <ItemList items={items} onSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          {selectedItemName && (
            <div className="text-black justify-center absolute top-30 right-20 p-4 max-w-md rounded-lg bg-purple-100">
              <h2 className="text-3xl font-bold text-black text-center mb-4 justify-center">
                MEAL IDEAS
              </h2>
              <MealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
