# Logica Inventario

Lo script salva in lato SERVER tutti gli item nella tabella "ServerItems" e poi controlla le armi, se sono droppate le elimina, se no le salva dentro "UsersWeapons['default']"

```lua
MySQL.ready(function()
	-- load all items from databse
	DBService.queryAsync("SELECT * FROM items", {}, function(result)
		for _, db_item in pairs(result) do
			if db_item.id then
				local item = Item:New({
					id = db_item.id,
					item = db_item.item,
					metadata = db_item.metadata or {},
					label = db_item.label,
					limit = db_item.limit,
					type = db_item.type,
					canUse = db_item.usable,
					canRemove = db_item.can_remove,
					desc = db_item.desc,
					group = db_item.groupId or 1,
					weight = db_item.weight or 0.1, -- rz
				})
				ServerItems[item.item] = item
			end
		end
	end)

	--load all secondary weapons from database
	DBService.queryAsync("SELECT * FROM loadout", {}, function(result)
		for _, db_weapon in pairs(result) do
			if db_weapon.curr_inv ~= "default" then
				loadAllWeapons(db_weapon)
			end
		end
	end)
end)

local function loadAllWeapons(db_weapon)
	local ammo = json.decode(db_weapon.ammo)
	local comp = json.decode(db_weapon.components)

	if db_weapon.dropped == 0 then
		local label = db_weapon.custom_label or db_weapon.label
		local weight = 0
		for k,v in pairs(SharedData.Weapons) do -- rz
			if db_weapon.name == v.HashName then -- rz
				if v.Weight == nil then -- rz
					weight = 1.0 -- rz
				else -- rz
					weight = v.Weight -- rz
				end -- rz
			end -- rz
		end -- rz

		local weapon = Weapon:New({
			id = db_weapon.id,
			propietary = db_weapon.identifier,
			name = db_weapon.name,
			ammo = ammo,
			components = comp,
			used = false,
			used2 = false,
			charId = db_weapon.charidentifier,
			currInv = db_weapon.curr_inv,
			dropped = db_weapon.dropped,
			group = 5,
			label = label,
			serial_number = db_weapon.serial_number,
			custom_label = db_weapon.custom_label,
			custom_desc = db_weapon.custom_desc,
			weight = weight, -- rz
			slot = db_weapon.slot -- rz todo
		})

		if not UsersWeapons[db_weapon.curr_inv] then
			UsersWeapons[db_weapon.curr_inv] = {}
		end

		UsersWeapons[db_weapon.curr_inv][weapon:getId()] = weapon
	else
		DBService.deleteAsync('DELETE FROM loadout WHERE id = @id', { id = db_weapon.id }, function() end)
	end
end
```
