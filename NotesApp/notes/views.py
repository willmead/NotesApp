from django.views import generic
from notes.models import Note
from django.http import JsonResponse

import json

class NoteListView(generic.ListView):
    model = Note


def get_note(request):
    body = json.loads(request.body.decode("utf-8"))
    print(body["ID"])
    data = {'note': Note.objects.get(pk=int(body["ID"])).text}
    return JsonResponse(data)
