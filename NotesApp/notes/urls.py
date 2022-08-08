from django.urls import path

from notes.views import NoteListView, get_note, save_note

urlpatterns = [
    path("", NoteListView.as_view(), name="note-list"),
    path("notes", get_note, name="notes"),
    path("save", save_note, name="save"),
]
