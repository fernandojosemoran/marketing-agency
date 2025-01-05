import os
from django.views import View
from django.http import FileResponse, Http404
from django.conf import settings


class App(View):
    def get(self, request, *args, **kwargs):

        requested_path = request.path.strip("/")

        file_name = requested_path if requested_path else "index.html"

        file_path = os.path.join(
            settings.BASE_DIR, settings.STATICFILES_DIRS_NAME, file_name
        )

        if os.path.exists(file_path):
            return FileResponse(open(file_path, 'rb'))
        else:
            raise Http404("File not found")
