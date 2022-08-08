from django.views import generic
from notes.models import Note
from django.http import JsonResponse

import json


class NoteListView(generic.ListView):
    model = Note


def get_note(request):
    body = json.loads(request.body.decode("utf-8"))
    data = {"note": Note.objects.get(pk=int(body["ID"])).text}
    return JsonResponse(data)


def save_note(request):
    body = json.loads(request.body.decode("utf-8"))
    note = Note.objects.get(pk=int(body["ID"]))
    note.text = body["TEXT"]
    note.save()
    return JsonResponse({"message": "success"})
