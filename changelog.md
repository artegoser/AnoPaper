<!--
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 -->

# Anopaper vSomeday

- [ ] Api for upload photos
- [ ] Inserting a photo in a note
- [ ] Cloud sync
- [ ] Settings for publish notes, such as: delete after reading, number of reads before deleting, adding your own data (name, picture, status in the settings) to the note.

# AnoPaper v2.0.0

- [ ] Full migration to svelte

# AnoPaper v1.2.0 (coming)

- [x] Add helmet

# Anopaper v1.1.0 (current)

- [x] Local notes editing (0a0f0f950ae95afb78d3fe71815b351f77f01eb9)
- [x] Publish local notes (3963e435e8faca9b93b2e481ac799d78ed863f8c)
- [x] Migration notes storage to mongodb (#3)
- [x] Maintaining statistics on sent notes, the number of notes received, number of deleted notes (#8)
- [x] Encrypting notes in the database (#26)
- [x] Local notes ids is ~~incremental~~ `Date.now()` instead of uuidv4 (238af9ad6957f72439a1a39f32662145dd2bdce8)

# AnoPaper v1.0.0

- [x] MD Support (43d7601ea6ca7838f41beefc1d57dd4774e74add)
- [x] Local notes (7e7b336d56e89ccc9874766e7752e358a2ce9ca7)
- [x] Publish notes (0f35ab45157ebbd5014f01378b63f509df95f586)
- [x] Delete local notes (df877c6aa59a03cb2d53858c320ee718b50d56c9)
- [x] MathJax support (866181e48a1ef6db9cb00548f82f3386c29a288c)
- [x] GFM support (697439f7b4fa306968cfc8b2a7df5572a3530030)
- [x] OpenAi completion support (2c07e71349eea62e201b7c58ea0e9c251cb0d133)
- [x] Collaborative editing (536c847375a406571a2d7f5fb3f708f4e80c4a6d)
- [x] Sync (6af0bfacb22c55aa92b688c1307109a2f1220d66)
- [x] Local notes search (a34ae82215c1baa68978c39519fe851684070efb)
- [x] Limit for publish notes (a07ea54631d2eff1d148f8d2bd27009ba768fd26)
